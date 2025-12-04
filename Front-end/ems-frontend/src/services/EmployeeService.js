import api from "./api";

const REST_API_BASE_URL = "/api/employees";

export const listEmployees = (page, size) =>
  api.get(`${REST_API_BASE_URL}/page?page=${page}&size=${size}`);

export const deleteEmployee = (id) =>
  api.delete(`${REST_API_BASE_URL}/${id}`);

export const createEmployee = (employee) =>
  api.post(REST_API_BASE_URL, employee);

export const getEmployee = (id) =>
  api.get(`${REST_API_BASE_URL}/${id}`);

export const updateEmployee = (id, employee) =>
  api.put(`${REST_API_BASE_URL}/${id}`, employee);
