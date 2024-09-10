import { apiClient } from "../Common/apiClient";

export default class Auth {
    loginEmail(params: unknown, headers: any) {
        return apiClient.post(`/api/v1/auth/login/request_token/email`, params, headers);
    }
    loginPhone(params: unknown, headers: any) {
        return apiClient.post(`/api/v1/auth/login/request_token/sms`, params, headers);
    }
}