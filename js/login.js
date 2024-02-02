const inputs = document.querySelectorAll('.input');

const hadleFocus = ({ target }) =>
{
    const span = target.previousElementSibling;
    span.classList.add('span-active');
}

const hadleFocusOut = ({ target }) =>
{
    if(target.value === '')
    {
        const span = target.previousElementSibling;
        span.classList.remove('span-active');
    }
}

const hadleChange = () =>
{
    const [username, password] = inputs;

    if(username.value && password.value.lenght >= 8)
    {
        button.removeAttribute('disabled');
    }
    else
    {
        button.setAttribute('disabled', '');
    }
}

inputs.forEach((input) => input.addEventListener('focus', hadleFocus));
inputs.forEach((input) => input.addEventListener('focusout', hadleFocusOut));
inputs.forEach((input) => input.addEventListener('input', hadleChange));
