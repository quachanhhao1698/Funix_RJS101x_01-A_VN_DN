import { STAFFS,DEPARTMENTS }   from '../shared/staffs';

export const initialState = {
      staffs: STAFFS,
      staffsPayroll: STAFFS,
      departments: DEPARTMENTS,
      staffDepartments: DEPARTMENTS
};

export const Reducer = (state = initialState, action) => {
      
      return state;
  };