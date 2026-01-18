const API_DOMAIN = "http://localhost:8080/";

export const get = async (path) => {
  const token = localStorage.getItem("token");

  const res = await fetch(API_DOMAIN + path, {
    method: "GET",
    headers: {
      ...(token && {Authorization:  `Bearer ${token}`})
    }
  });
  const result = await res.json();
  return result;
}

export const post = async (path, options) => {
  const res = await fetch(API_DOMAIN + path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(options)
  });
  // const result = await res.json();
  return res;
}

export const patch = async (path, options) => {
  const res = await fetch(API_DOMAIN + path, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(options)
  });
  const result = await res.json();
  return result;
}

export const del = async (path) => {
  const res = await fetch(API_DOMAIN + path, {
    method: "DELETE"
  });
  const result = await res.json();
  return result;
}