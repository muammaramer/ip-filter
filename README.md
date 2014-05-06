# I.P Filter
=========

## Overview
The Jahia I.P Filter module provide a user-friendly interface to manage I.P filtering on Digital Factory sites.
It is accessible from the configuration section in Digital Factory server settings.
Using this module any user with the `adminIpFilterSettings` permission will be able to restrain the Disgital Factory sites
To defined I.P or I.P range. The rules can't restrain Digital Factory root user access.

---
## Goals
- Provide a way to manage I.P filtering on Digital Factory sites.
- Support site by site or all sites in one management.
- Access this functionality directly from administration mode.
- Manage filtering dynamically ( Without restarting the Digital Factory Server).

---
## Version
Jahia I.P Filter module v1.0.0

---
## Rules Creation

The module displays a rule creation form.

#Form Fields
| Field                       | Form Input                  |
| :-------------------------- | --------------------------- |
| `Name`                        | Opened text input (Be careful this name will be user as Digital Factory JCR nodename) |
| `Description`                 | Opened text input           |
| `Site`                        | Generated select List       |
| `Rule type`                   | Choice list (Allow only/Deny)   |
| `I.P mask`                    | Opened input text to define I.P or I.P range using bits mask    |

---
## Rules types definition
## Allow only
The `Allow only` type is a closed base I.P Mask type.
It means that the concerned site will refuse all I.Ps not defined as `Allow only` in a rule.
## Deny
The `Deny` type is an opened base I.P Mask type.
It means that the concerned site will allow all I.Ps except the ones defined as `Deny` in a rule.

---
## I.P mask definition
##Single I.P
To define a single I.P, multiple syntaxes are allowed :
I.P syntax, just the I.P. Example : 192.168.0.1
I.P subnet bits syntax, the I.P with its bitMask. Example : 192.168.0.1/32
##I.P range
I.P subnet bits syntax, the I.P with its bitMask. Example : 192.168.0.1/29 for the range 192.168.0.1 - 192.168.0.6
You can use this tool to calculate the I.P range subnet mask : http://www.subnet-calculator.com/

---

## Rules Update
The module provide an `Existing Rules` view that displays the list of existing rules.
For each rule a line containing the rules information and an edit button is displayed.
Clicking on the Edit button will display the rule update form.
In this form user can :
- Change rule name
- Change rule description
- Change I.P mask
- Deactivate rule

## Rules Delete
In the rule Update Form (See Rules Update section) there is a Delete button.
Clicking on this button will proceed with rule deletion

## Module Setup Deployment
No settings are needed to run this module.
Simply deploy it on your Digital Factory instance and it will appear in the Configuration
Section of server settings.