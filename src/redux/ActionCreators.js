import * as ActionTypes from './ActionTypes';
// import { STAFFS } from '../shared/staffs';
import {baseUrl} from '../shared/baseUrl'
import { type } from 'jquery';

// STAFFS
export const fetchStaffs = () => (dispatch) => {
      dispatch(staffsLoading(true));

      return fetch( baseUrl + 'staffs')
            .then(response => response.json())
            .then(staffs => dispatch(addStaffs(staffs)))

      
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

// ADD NEW STAFFS

export const postStaff = (id, name, doB, salaryScale, startDate, department,anualLeave,overTime,image,salary) => (dispatch) =>{
      const newStaff= {
            id: id,
            name: name,
            doB: doB,
            salaryScale: salaryScale,
            startDate: startDate,
            departmentId: department,
            anualLeave: anualLeave,
            overTime: overTime,
            image: image,
            salary:salary
      };

      return fetch(baseUrl + 'staffs', {
            method: "POST",
            body: JSON.stringify(newStaff),
            headers: {
              "Content-Type": "application/json"
            },
            credentials: "same-origin"
        })
        .then(response => {
            if (response.ok) {
              return response;
            } else {
              var error = new Error('Error ' + response.status + ': ' + response.statusText);
              error.response = response;
              throw error;
            }
          },
          error => {
                throw error;
          })
        .then(response => response.json())
        .then(response => dispatch(addStaffs(response)))
        .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });

};

export const delStaff =(staff) => ({
      type: ActionTypes.DELETE_STAFF,
      payload: staff
})

export const deleteStaff =(id) => (dispatch) => {
      const staffId = id
      console.log("id" ,staffId);

      return fetch(baseUrl + 'staffs' +'/'+ staffId, {
            method: 'DELETE',
            
      })
      .then(response => {
            if (response.ok) {
              return response;
            } else {
              var error = new Error('Error ' + response.status + ': ' + response.statusText);
              error.response = response;
              throw error;
            }
          },
          error => {
                throw error;
          })
        .then(response => response.json())
        .then(response => dispatch(addStaffs(response)))
        .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
}

// ________________________________________________________________
// DEPARTMENTS
export const fetchDepartments = () => (dispatch) => {
      dispatch(departmentsLoading(true));

      return fetch( baseUrl + 'departments')
            .then(response => response.json())
            .then(department => dispatch(addDepartments(department)))
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
          .then(response => response.json())
          .then(staffsSalary => dispatch(addStaffsSalary(staffsSalary)))
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
