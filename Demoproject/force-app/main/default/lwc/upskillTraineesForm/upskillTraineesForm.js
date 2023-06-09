import { LightningElement, track, wire } from 'lwc';
import Name_FIELD from '@salesforce/schema/Devops_Test__c.Name';
import Date_FIELD from '@salesforce/schema/Devops_Test__c.Training_Date__c';
import Fees_FIELD from '@salesforce/schema/Devops_Test__c.Training_Fees__c';
import Topics_FIELD from '@salesforce/schema/Devops_Test__c.Training_Topics__c';
import Email_FIELD from '@salesforce/schema/Devops_Test__c.Trainee_Email__c';
import Contact_FIELD from '@salesforce/schema/Devops_Test__c.Trainee_Contact__c';
import getTrainees from '@salesforce/apex/ListOfTrainees.getTrainees';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';
//import { refreshApex } from '@salesforce/apex';


export default class UpskillTraineesForm extends LightningElement {
    objectApiName='Devops_Test__c';
    fieldList=[Name_FIELD, Date_FIELD,Fees_FIELD,Topics_FIELD,  Email_FIELD,Contact_FIELD ];
    //fieldList=[Name, Date__c, Items__c, Category__c, Necessity__c,Description__c, Amount__c, HomeExpenseMD__c];
   
    handleFormCreate(event){
        const evt=new ShowToastEvent({
            title: "Record Create",
            message: "Record ID: " +event.detail.id,
            variant: "success",
        });
    }
        //refreshApex(this.yourRecord);
        /*this.dispatchEvent(evt);*/
        navigateNext() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: event.detail.id,
                objectApiName: 'Devops_Test__c',
                actionName:'view'
                
            },
        });
    }
    @track data;
    @track columns=[
        {label:'Trainee Name', fieldName:'Name', type:'Text'},
        {label:'Training Date', fieldName:'Training_Date__c', type:'Date'},
        {label:'Training Fees', fieldName:'Training_Fees__c', type:'Text'},
        {label:'Training Topics', fieldName:'Training_Topics__c', type:'Text'},
        {label:'Trainee Email', fieldName:'Trainee_Email__c', type:'Text'},
        {label:'Trainee Contactno', fieldName:'Trainee_Contact__c', type:'Text'}
        ];
        
    @wire(getTrainees) getTrainees({error,data}) {
        debugger;
        if(data) {
            this.data=data;
        }
        else if(error){
            this.data=undefined;
            

        }
         //refreshApex (this.getExpenseitem)
    }
        
      
}