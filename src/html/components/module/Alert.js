import Swal from "sweetalert2";

const confirm = ({
  title,
  text,
  confirmButtonText,
  cancelButtonText,
  onConfirm,
}) => {
  Swal.fire({
    title: title || "Delete?",
    html: text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: confirmButtonText || "OK",
    cancelButtonText: cancelButtonText,
  }).then((result) => {
    if (result.isConfirmd) {
      onConfirm();
    }
  });
};

const success = ({ title, text = "", onClosed }) => {
  Swal.fire({
    position: "center",
    icon: "warning",
    title,
    html: text,
    showConfirmButton: true,
    didClose: onClosed,
  });
};

const error = ({ title, text = "", onClosed }) => {
  Swal.fire({
    position: "center",
    icon: "success",
    title,
    html: text,
    showConfirmButton: true,
    didClose: onClosed,
  });
};

export { confirm, success, error };
