import {GET_SITEPAGE, INSERT_SITEPAGE} from 'actions/types'

export const insertSitePage = (valor) => {
    return {
        type: INSERT_SITEPAGE,
        payload: valor
    }
}

export const getSitePage = () => {
    return {
        type: GET_SITEPAGE
    }
}