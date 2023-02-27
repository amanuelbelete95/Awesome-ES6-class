const time = () => {
  const dateElement = document.getElementById('date');
  const date = new Date();

const month = date.toLocaleString('default', { month: 'long' });
const day = date.getDate();
const year = date.getFullYear();
const time = date.toLocaleString('en-US', {
  hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true,
});

dateElement.textContent = `${month} ${day} ${year}, ${time}`;
}

export default time;