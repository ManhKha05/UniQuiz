const API_DOMAIN = "http://localhost:8080/";

const refreshAccessToken = async () => {
  console.log("Refresh Token");
  try {
    const res = await fetch(API_DOMAIN + 'auth/refresh', {
      method: "POST",
      credentials: "include"
    })
    if (!res.ok) {
      throw new Error("Refresh failed")
    }
    const data = await res.json();
    sessionStorage.setItem("token", data.accessToken);
    return data.accessToken;
  } catch (error) {
    console.log(error);
  }
}

const fetchBase = async (path, options = {}) => {
  const token = sessionStorage.getItem("token");

  const headers = {
    ...(options.headers || {}),
    ...(token && { Authorization: `Bearer ${token}` })
  }
  let res = await fetch(API_DOMAIN + path, {
    ...options,
    headers,
    credentials: "include"
  })
  // console.log(res);

  if (res.status === 401) {
    const newToken = await refreshAccessToken();

    res = await fetch(API_DOMAIN + path, {
      ...options,
      headers: {
        ...headers, 
        Authorization: `Bearer ${newToken}`
      },
      credentials: "include"
    })
    // console.log(res);
    if (res.status === 401) {
      sessionStorage.removeItem("token");
      return;
    }
  }
  return res;
}

export const get = async (path, params = {}) => {
  const query = new URLSearchParams(
    Object.entries(params).filter(
      ([_, value]) => value !== null && value !== undefined && value !== ""
    )
  ).toString();

  const url = query ? `${path}?${query}` : path;
  console.log(url);

  return fetchBase(url, { method: "GET" });
}

export const post = async (path, options) => {
  return fetchBase(path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(options)
  }); 
}

export const put = async (path, options) => {
  return fetchBase(path, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(options)
  });
}

export const patch = async (path, options) => {
  return fetchBase(path, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(options)
  });
}

export const del = async (path) => {
  return fetchBase(path, { method: "DELETE" });;
}

// export const get = async (path, params = {}) => {
//   const token = sessionStorage.getItem("token");

//   const query = new URLSearchParams(
//     Object.entries(params).filter(
//       ([_, value]) => value !== null && value !== undefined && value !== ""
//     )
//   ).toString();
//   const url = query ? `${path}?${query}` : path;
//   console.log(url);

//   const res = await fetch(API_DOMAIN + url, {
//     headers: {
//       ...(token && ({ Authorization: `Bearer ${token}`}))
//     }
//   });
//   return res;
// }

// export const post = async (path, options) => {
//   const token = sessionStorage.getItem("token");

//   const res = await fetch(API_DOMAIN + path, {
//     method: "POST",
//     headers: {
//       ...(token && ({ Authorization: `Bearer ${token}`})),
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(options)
//   });
//   return res;
// }

// export const put = async (path, options) => {
//   const token = sessionStorage.getItem("token");

//   const res = await fetch(API_DOMAIN + path, {
//     method: "PUT",
//     headers: {
//       ...(token && ({ Authorization: `Bearer ${token}`})),
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(options)
//   });
//   return res;
// }

// export const patch = async (path, options) => {
//   const token = sessionStorage.getItem("token");

//   const res = await fetch(API_DOMAIN + path, {
//     method: "PATCH",
//     headers: {
//       ...(token && ({ Authorization: `Bearer ${token}`})),
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(options)
//   });
//   return res;
// }

// export const del = async (path) => {
//   const token = sessionStorage.getItem("token");

//   const res = await fetch(API_DOMAIN + path, {
//     method: "DELETE",
//     headers: {
//       ...(token && ({ Authorization: `Bearer ${token}`})),
//     }
//   });
//   return res;
// }