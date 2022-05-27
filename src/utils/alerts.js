import Swal from 'sweetalert2';

export const messageAlert = (icon, text) =>
  Swal.fire({
    title: 'Genial!',
    text,
    icon,
    confirmButtonText: 'Aceptar',
  });