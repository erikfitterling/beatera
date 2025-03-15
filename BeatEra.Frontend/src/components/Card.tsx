interface CardProps {
    title: string;
    content: string;
    variant?: "primary" | "secondary";
  }
  
  const Card = ({ title, content, variant = "primary" }: CardProps) => {
    return (
      <div className={`card ${variant === "secondary" ? "secondary" : ""}`}>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    );
  };
  
  export default Card;
  