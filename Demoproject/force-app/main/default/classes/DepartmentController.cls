public with sharing class DepartmentController {
    @AuraEnabled(cacheable=true)
    public static List<Department__c> getDepartments() {
        return [SELECT Id, Name, Budget__c, Department_Branch__c, Department_Email__c, Department_Phone_Number__c FROM Department__c];
    }

    // @AuraEnabled
    // public static Department__c createDepartment(String name, Decimal budget, String branch, String email, String phone) {
    //     Department__c newDepartment = new Department__c();
    //     newDepartment.Budget__c = budget;
    //     newDepartment.Department_Branch__c = branch;
    //     newDepartment.Department_Email__c = email;
    //     newDepartment.Department_Phone_Number__c = phone;

    //     try {
    //         insert newDepartment;
    //         return newDepartment;
    //     } catch (Exception e) {
    //         throw new AuraHandledException('Error creating department: ' + e.getMessage());
    //     }
    // }


    @AuraEnabled
    public static Department__c createDepartment(Decimal budget, String branch, String email, String phone){
        Department__c newDepartment = new Department__c();
        newDepartment.Budget__c = budget;
        newDepartment.Department_Branch__c = branch;
        newDepartment.Department_Email__c = email;
        newDepartment.Department_Phone_Number__c = phone;
        insert newDepartment;
        return newDepartment;
    }
}