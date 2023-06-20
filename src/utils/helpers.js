import {useToast} from 'vue-toast-notification';

export function showToast(msg, options={}) {
    const common_toast_options = {
        duration: 5000,
        queue: false,
        type: 'success',
        position: 'bottom'
    }
    
    const toast = useToast()

    toast.open({
        ...common_toast_options, 
        ...options,
        message: msg
    })
}
