import throttle from 'lodash.throttle';

    const refs = {
        form: document.querySelector('.feedback-form'),
    };
        const STORAGE_KEY = 'form-data';

    updateFormFields();

        refs.form.addEventListener('input', throttle(handleInput, 500));
        refs.form.addEventListener('submit', handleSubmit);

        function handleSubmit(event) {
            event.preventDfault();
            const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
            if(!data.message || !data.email) return;
            console.log(data);
            localStorage.removeItem(STORAGE_KEY);
            updateFormFields ();
        };

    function handleInput({target:{ name, value } }) { 
        const store = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
        store[name] = value;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
    }
    
        function updateFormFields () {
            const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
            Object.entries(data || { email: '', message: '' }).forEach(([name,value]) => {
                refs.form.elements[name].value = value;
            })
        };
