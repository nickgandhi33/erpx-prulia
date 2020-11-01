import InputMask from "react-input-mask";
import React from "react";
import axios from "axios";
window.axios = axios;

export const memberDetailsMap = (childNum) => {
    let key_pair = {
        member: 'prudential_id',
        mainInsuredBirthDate: "dob",
        mainInsuredEmail: "email",
        mainInsuredGender: "gender",
        mainInsuredMobileNo: "cell_number",
        mainInsuredName: "full_name",
        mainInsuredNric: "nric_number",
        mainInsuredStatus: "marital_status",
        mainInsuredAddress: 'address',
        mainInsuredPostcode: 'postcode',

        spouseName: 'spouse_name',
        spouseNric: 'spouse_nric_number',
        spouseBirthDate: 'spouse_dob',
    };

    for (let i = 0; i < childNum; i++) {
        key_pair[`childName${i}`] = `child_name${i}`;
        key_pair[`childBirthDate${i}`] = `child_dob${i}`;
    }

    return key_pair;
};

export function getMemberDetails() {
    return axios
        .get(
            "/api/method/erpx_prulia.prulia_members.doctype.prulia_member.prulia_member.mobile_member_login"
        )
        .then((data) => {
            return data && data.data && data.data.message;
        });
}

export function getPrevReg(member_id) {

}

export function getURL() {
    return window.location.hostname.includes("localhost")
        ? "http://167.99.77.197/"
        : "/";
}

export const CustomInput = props => (
    <InputMask {...props}>{inputProps => <input {...inputProps} />}</InputMask>
);