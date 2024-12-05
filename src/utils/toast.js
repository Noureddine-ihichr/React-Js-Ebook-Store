import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const defaultConfig = {
  position: "top-center",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  style: {
    backgroundColor: 'white',
    color: 'black',
    fontWeight: '500',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  }
};

export const showToast = {
  success: (message) => {
    toast.success(message, {
      ...defaultConfig,
      icon: "🎉",
    });
  },
  error: (message) => {
    toast.error(message, {
      ...defaultConfig,
      icon: "❌",
    });
  },
  info: (message) => {
    toast.info(message, {
      ...defaultConfig,
      icon: "ℹ️",
    });
  },
  warning: (message) => {
    toast.warning(message, {
      ...defaultConfig,
      icon: "⚠️",
    });
  }
};
