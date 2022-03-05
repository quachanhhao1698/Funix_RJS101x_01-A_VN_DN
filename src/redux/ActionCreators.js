import * as ActionTypes from './ActionTypes';
// import { STAFFS } from '../shared/staffs';
import {baseUrl} from '../shared/baseUrl'

// STAFFS
export const fetchStaffs = () => (dispatch) => {
      dispatch(staffsLoading(true));

      return fetch( baseUrl + 'staffs')
            .then(respone => {
                  if(respone.ok) {
                        return respone;
                  }else {
                        var error = new Error('Error ' + respone.status + ': ' + respone.statusText);
                        error.respone =respone;
                        throw error;
                  }
            },
                  error => {
                        var errmess = new Error(error.message);
                        throw errmess;
                  }
            )
            .then(response => response.json())
            .then(staffs => dispatch(addStaffs(staffs)))
            .catch(error => dispatch(staffsFailed(error.message)))

      
}

export const staffsLoading = () => ({
      type:ActionTypes.STAFFS_LOADING
});

export const staffsFailed = (errmess) => ({
      type:ActionTypes.STAFFS_FAILED,
      payload: errmess
});

export const addStaffs = (staffs) => ({
      type:ActionTypes.ADD_STAFFS,
      payload: staffs
});

// ________________________________________________________________
// DEPARTMENTS
export const fetchDepartments = () => (dispatch) => {
      dispatch(departmentsLoading(true));

      return fetch( baseUrl + 'departments')
            .then(respone => {
                  if(respone.ok) {
                        return respone;
                  }else {
                        var error = new Error('Error ' + respone.status + ': ' + respone.statusText);
                        error.respone =respone;
                        throw error;
                  }
            },
                  error => {
                        var errmess = new Error(error.message);
                        throw errmess;
                  }
            )
            .then(response => response.json())
            .then(department => dispatch(addDepartments(department)))
            .catch(error => dispatch(departmentsFailed(error.message)))

}

export const departmentsLoading = () => ({
      type:ActionTypes.DEPARTMENTS_LOADING
});

export const departmentsFailed = (errmess) => ({
      type:ActionTypes.DEPARTMENTS_FAILED,
      payload: errmess
});

export const addDepartments = (departments) => ({
      type:ActionTypes.ADD_DEPARTMENTS,
      payload: departments
});

// ________________________________________________________________
// SALARYS
export const fetchStaffsSalary = () => (dispatch) => {
      dispatch(staffsSalaryLoading(true));
  
      return fetch(baseUrl + 'staffsSalary')
            .then(respone => {
                  if(respone.ok) {
                        return respone;
                  }else {
                        var error = new Error('Error ' + respone.status + ': ' + respone.statusText);
                        error.respone =respone;
                        throw error;
                  }
            },
                  error => {
                        var errmess = new Error(error.message);
                        throw errmess;
                  }
            )
          .then(response => response.json())
          .then(staffsSalary => dispatch(addStaffsSalary(staffsSalary)))
          .catch(error => dispatch(staffsSalaryFailed(error.message)))

          
  }
  
  export const  staffsSalaryLoading = () => ({
      type: ActionTypes.STAFFSSALARY_LOADING
  });
  
  export const  staffsSalaryFailed = (errmess) => ({
      type: ActionTypes.STAFFSSALARY_FAILED,
      payload: errmess
  });
  
  export const  addStaffsSalary = (staffsSalary) => ({
      type: ActionTypes.ADD_STAFFSSALARY,
      payload:staffsSalary 
  });
