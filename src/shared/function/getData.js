export const getData = async(url,setData) => {
  const res = await fetch(url, {
    method: 'GET',
  })
  const json = await res.json();
  setData(json);
}