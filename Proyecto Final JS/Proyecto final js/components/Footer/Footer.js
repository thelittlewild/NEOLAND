import "./Footer.css";

const template = () => `
<h3>🌸 keep it pretty savage 🌸</h3>
`;

export const printTemplateFooter = () => {
  document.querySelector("footer").innerHTML = template();
};
