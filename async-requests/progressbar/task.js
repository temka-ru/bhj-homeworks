const form = document.getElementById('form');
const progress = document.getElementById('progress');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('file');
    const file = fileInput.files[0];

    const formData = new FormData();
    formData.append('file', file);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.upload.addEventListener('progress', function(event) {
        if (event.lengthComputable) {
        const percentComplete = (event.loaded / event.total) * 100;
        progress.value = percentComplete;
        }
    });

    xhr.addEventListener('load', function() {d
        console.log('File uploaded successfully');
    });

    xhr.addEventListener('error', function() {
        console.error('Error uploading file');
    });

    xhr.send(formData);
});