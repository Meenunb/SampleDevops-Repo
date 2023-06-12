import { LightningElement, wire, track } from 'lwc';
import createDepartment from '@salesforce/apex/DepartmentController.createDepartment';
import getDepartments from '@salesforce/apex/DepartmentController.getDepartments';
import { refreshApex } from '@salesforce/apex';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

const columns = [
    { label: 'Budget', fieldName: 'Budget__c', type: 'text' },
    { label: 'Branch', fieldName: 'Department_Branch__c', type: 'Picklist' },
    { label: 'Email', fieldName: 'Department_Email__c', type: 'email' },
    { label: 'Phone Number', fieldName: 'Department_Phone_Number__c', type: 'phone' }
];

export default class DepartmentForm extends LightningElement {
    @track departments;
    columns = columns;
    @track wiredRecordList = [];


    // newly added 
    objectApiName= 'Department__c';


    @wire(getDepartments)
    wiredDepartments(result) {
        this.wiredRecordList = result.data;
        if (result.data) {
            this.departments = result.data;;
        } else if (result.error) {
            this.error = result.error;
        }
    }

    successToastHandler(event){
        this.showToast('Data saved successfully');
        refreshApex(this.wiredRecordList);
    }
    // newly added 
    submitHandler(event){
        const fields = {...event.detail.fields};
            this.refs.depart.submit(fields);
    }

        showToast(message, title = 'success', variant = 'success') {
        const event = new ShowToastEvent({
            title,
            message,
            variant
        });
        this.dispatchEvent(event);
    }
}