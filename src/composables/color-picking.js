import { ref } from "vue";

export default function ColorPicker() {
  const colors = ["green", "red", "blue", "purple"];
  const message = ref("Pick a color...");

  // do a random color based on the array index;
  //between 0 - 3
  const matchColor = (value) => {
    const randomIndex = Math.floor(Math.random() * colors.length);

    colors[randomIndex] === value
      ? (message.value = `You win... [answer: ${colors[randomIndex]}]`)
      : (message.value = `You lose [answer: ${colors[randomIndex]}]`);
  };
  return { colors, message, matchColor };
}
