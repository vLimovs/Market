import React from 'react'
import { Link } from 'react-router';
import toastr from 'toastr';
const AddToCart = () => {
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": true,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
    return (
        <Link onClick={() => toastr["success"](" ", "The item has been added to the cart 🛒")}>Add to cart</Link>
    )
}

export default AddToCart