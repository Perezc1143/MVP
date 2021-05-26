const $input = $('.search');
const $button = $('.submit');

$button.click(() => {
    const data = $input.val();
    makeRequest(data);
})
const makeRequest = (data) => {
    $.get(`http://localhost:3000/${input.val()}`, (data) => {
        const result = JSON.parse(data);
        console.log(result);
    })
}
