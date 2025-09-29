'use client';

import React, { useState, useRef } from 'react';
import * as XLSX from 'xlsx';

type UploadedFile = {
  name: string;
  data: any[][];
};

// Find the start row of the data by detecting 2 consecutive numeric rows
function findDataStartRow(rows: any[][]): number {
  for (let i = 0; i < Math.min(20, rows.length - 1); i++) {
    const firstCell = rows[i]?.[0];
    const secondCell = rows[i + 1]?.[0];

    if (
      firstCell !== undefined &&
      secondCell !== undefined &&
      !isNaN(Number(firstCell)) &&
      Number(firstCell) > 0 &&
      !isNaN(Number(secondCell)) &&
      Number(secondCell) > 0
    ) {
      return i;
    }
  }
  return -1;
}

export default function Client({ title }: { title: string }) {
  const [fileContent, setFileContent] = useState<UploadedFile | null>(null);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  // Resets the file input to allow re-upload of the same file if needed
  const resetFileInput = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setLoading(true);
    setProgress(0);

    const reader = new FileReader();

    reader.onprogress = (event) => {
      if (event.lengthComputable) {
        setProgress(Math.round((event.loaded / event.total) * 100));
      }
    };

    reader.onload = (e) => {
      const data = e.target?.result;
      if (!data) {
        setLoading(false);
        resetFileInput();
        return;
      }

      try {
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const rawRows = XLSX.utils.sheet_to_json(worksheet, { header: 1 }) as any[][];
        const rows = rawRows.filter((r) => r.length > 0);

        const dataStartIndex = findDataStartRow(rows);

        if (dataStartIndex === -1) {
          alert('Could not find start of data');
          setLoading(false);
          resetFileInput();
          return;
        }

        const combinedRows: any[][] = [];

        // Loop through data rows in pairs (i and i+1)
        for (let i = dataStartIndex; i < rows.length - 1; i += 2) {
          const row1 = rows[i];
          const row2 = rows[i + 1];

          // Adjust column index for DDO if different in your sheet (currently 0)
          const ddo1 = String(row1[0] || '').trim();
          const ddo2 = String(row2[0] || '').trim();

          // Skip if neither DDO matches "032605"
          if (ddo1 !== '032605' && ddo2 !== '032605') {
            continue;
          }

          const maxCols = Math.max(row1.length, row2.length);
          const combined: any[] = [];

          for (let j = 0; j < maxCols; j++) {
            combined.push(row1[j] ?? '');
            combined.push(row2[j] ?? '');
          }

          combinedRows.push(combined);
        }

        console.log('Combined Rows:', combinedRows);

        setFileContent({ name: file.name, data: combinedRows });
      } catch (error) {
        console.error('Error parsing Excel file:', error);
        alert('Failed to parse Excel file.');
      } finally {
        setProgress(100);
        setLoading(false);
        resetFileInput();
      }
    };

    reader.onerror = () => {
      alert('Failed to read file.');
      setLoading(false);
      resetFileInput();
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>{title}</h2>

      <input
        ref={inputRef}
        type="file"
        accept=".xls,.xlsx"
        onChange={handleFileChange}
        disabled={loading}
      />

      {loading && (
        <div style={{ margin: '10px 0' }}>
          <div
            style={{
              width: '100%',
              height: '10px',
              backgroundColor: '#eee',
              borderRadius: '4px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: `${progress}%`,
                height: '100%',
                backgroundColor: '#4caf50',
                transition: 'width 0.2s linear',
              }}
            />
          </div>
          <p style={{ fontSize: '0.9rem' }}>Reading file: {progress}%</p>
        </div>
      )}

      {/* File content display is disabled for now */}
    </div>
  );
}
