const API_DOMAIN = "http://localhost:8080/";

export const get = async (path, params = {}) => {
  const token = localStorage.getItem("token");

  const query = new URLSearchParams(
    Object.entries(params).filter(
      ([_, value]) => value !== null && value !== undefined && value !== ""
    )
  ).toString();

  const url = query ? `${API_DOMAIN}${path}?${query}` : `${API_DOMAIN}${path}`;
  console.log(url);
  const res = await fetch(url, {
    method: "GET",
    headers: {
      ...(token && {Authorization:  `Bearer ${token}`})
    }
  });
  // const result = await res.json();
  return res;
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

export const put = async (path, options) => {
  const res = await fetch(API_DOMAIN + path, {
    method: "PUT",
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
  // const result = await res.json();
  return res;
}

export const del = async (path) => {
  const res = await fetch(API_DOMAIN + path, {
    method: "DELETE"
  });
  // const result = await res.json();
  return res;
}