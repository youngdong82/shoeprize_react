export const stringConverter = (data) => {
  const afterConvert = data.split("\r\n").map((text,idx) =>(
    <div key={idx}>
      {text}
    </div>
  ));
  return afterConvert
}