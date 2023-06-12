import { LightningElement,track,wire} from 'lwc';
import getTrainees from '@salesforce/apex/ListOfTrainees.getTrainees';
//import { refreshApex } from '@salesforce/apex';


export default class Expenseapp extends LightningElement {
    
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