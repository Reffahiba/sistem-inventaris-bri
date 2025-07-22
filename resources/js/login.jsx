// resources/js/login.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import Checkbox from '@mui/material/Checkbox';

function LoginCheckbox() {
  return (
    <label className="flex items-center gap-2 text-sm text-gray-600">
      <Checkbox
        size="small"
        sx={{
          color: '#7e22ce',
          '&.Mui-checked': {
            color: '#7e22ce',
          },
        }}
      />
      Remember me
    </label>
  );
}

const el = document.getElementById('remember-checkbox');
if (el) {
  const root = ReactDOM.createRoot(el);
  root.render(<LoginCheckbox />);
}
