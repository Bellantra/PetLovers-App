import axios from 'axios'
import Swal from 'sweetalert2'

const { VITE_APP_CLOUDNAME } = import.meta.env

const handleUploadPictures = async (e, setLoading, setImage, preset) => {
    try {
        const files = e.target.files
        for (const img of files) {
            const formData = new FormData()
            formData.append('file', img)
            formData.append('upload_preset', preset)
            setLoading(true)
            const { data } = await axios.post(
                `https://api.cloudinary.com/v1_1/${VITE_APP_CLOUDNAME}/upload`,
                formData
            )
            const file = data.secure_url
            setImage((prevState) => [...prevState, file])
            setLoading(false)
        }
    } catch (error) {
        console.log(error)
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Upload failed. Please, try again',
        })
    }
}

export default handleUploadPictures
