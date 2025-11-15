import { toast } from 'react-toastify'

export function successToast(title) {
    toast.success(title, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
    })
}