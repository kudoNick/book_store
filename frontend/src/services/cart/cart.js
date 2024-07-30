import React from "react";
import axios from "axios";
import { EXPORT_DETAIL } from "next/dist/shared/lib/constants";
export default async function cart() {
  const respones = await axios.get("http://localhost:3333/cart");
  if (respones.data.status === "200") {
    return respones.data.data;
  } else if (respones.data.status === "404") {
    return respones.data;
  }
}
export async function createCart(data) {
  try {
    const respones = await axios.post(
      "http://localhost:3333/cart/create",
      data
    );

    if (respones.data.status === "200") {
      return respones.data.data;
    } else if (respones.data.status === "404") {
      return respones.data;
    }
  } catch (error) {
    console.log(error);
  }
}
export async function getCartByIdUser(id) {
  const respones = await axios.get("http://localhost:3333/cart/" + id);
  if (respones.data.status === "200") {
    return respones.data.data;
  } else if (respones.data.status === "404") {
    return respones.data;
  }
}
export async function getCartByIdCart(data) {
  const respones = await axios.post(
    "http://localhost:3333/cart/checkout/",
    data
  );
  if (respones.data.status === "200") {
    return respones.data.data;
  } else if (respones.data.status === "404") {
    return respones.data;
  }
}

export async function deleteCart(id) {
  const respones = await axios.delete(
    "http://localhost:3333/cart/delete/" + id
  );
  if (respones.data.status === "200") {
    return respones.data.data;
  } else if (respones.data.status === "404") {
    return respones.data;
  }
}
export async function deleteCartWhenCheckout(data) {
  const respones = await axios.post(
    "http://localhost:3333/cart/delete",
    data
  );
  if (respones.data.status === "200") {
    return respones.data;
  } else if (respones.data.status === "404") {
    return respones.data;
  }
}
export async function updateCart(data) {
  const respones = await axios.put("http://localhost:3333/cart/update", data);
  if (respones.status === 200) {
    return respones.data;
  }
}
