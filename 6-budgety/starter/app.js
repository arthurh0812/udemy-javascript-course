// BUDGET CONTROLLER
var budgetController = (function() {

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };

    Expense.prototype.calcPercentage = function(totalIncome) {

        if (totalIncome > 0) {
            this.percentage = Math.round((this.value / totalIncome) * 100);
        }
        else {
            this.percentage = -1;
        };
    };

    Expense.prototype.getPercentage = function() {
        return this.percentage;
    };

    var calculateTotal = function(type) {
        var sum;

        sum = 0;
        data.allItems[type].forEach(function(current) {
            sum += current.value;
        })
        data.totalItems[type] = sum;
    }

    data = {
        allItems: {
            inc: [],
            exp: [],
        },
        totalItems: {
            inc: 0,
            exp: 0,
        },
    };
    
    return {
        addItem: function(obj) {
            var ID, newItem;

            if (data.allItems['exp'].length > 0 && data.allItems['inc'].length > 0) {
                if (data.allItems['exp'][data.allItems['exp'].length - 1].id > data.allItems['inc'][data.allItems['inc'].length - 1].id) {
                    ID = data.allItems['exp'][data.allItems['exp'].length - 1].id + 1;
                }
                else {
                    ID = data.allItems['inc'][data.allItems['inc'].length - 1].id + 1;
                }
            }
            else if (data.allItems['exp'].length > 0 && data.allItems['inc'].length <= 0) {
                ID = data.allItems['exp'][data.allItems['exp'].length - 1].id + 1;
            }
            else if (data.allItems['inc'].length > 0 && data.allItems['exp'].length <= 0) {
                ID = data.allItems['inc'][data.allItems['inc'].length - 1].id + 1;
            }
            else {
                ID = 0;
            }

            if (obj.type === 'inc') {
                newItem = new Income(ID, obj.description, parseFloat(obj.value.toFixed(2)));
            }
            else if (obj.type === 'exp') {
                newItem = new Expense(ID, obj.description, parseFloat(obj.value.toFixed(2)));
            }
            // add new item to corresponding array
            data.allItems[obj.type].push(newItem);
        
            // return new item
            return newItem;
        },
        deleteItem: function(type, ID) {
            var IDs, index;

            IDs = data.allItems[type].map(function(current, index, array) {
                return current.id;
            });

            index = IDs.indexOf(ID);

            if (index !== -1) {
                data.allItems[type].splice(index, 1);
            }
            
        },
        replaceEdit: function(item, type, ID) {

            IDs = data.allItems[type].map(function(current, index, array) {
                return current.id;
            });

            index = IDs.indexOf(ID);

            if (index !== -1) {
                data.allItems[type][index].value = item.value;
                data.allItems[type][index].description = item.description;
                data.allItems[type][index].id = ID;
            }
        },
        calculateBudget: function() {

            // calulate total income and total expenses
            calculateTotal('inc');
            calculateTotal('exp');

            // new property budget and set it equal to the subtraction of the total expenses from the total income
            data.budget = data.totalItems.inc - data.totalItems.exp;

            // new property percentage
            if (data.totalItems.inc > 0) {
                data.percentage = Math.round((data.totalItems.exp / data.totalItems.inc) * 100);
            }
            else {
                data.percentage = -1;
            };
        },
        calculatePercentages: function() {

            data.allItems.exp.forEach(function(current) {
                current.calcPercentage(data.totalItems.inc);
            });
        },
        getPercentages: function() {

            var allPercentages = data.allItems.exp.map(function(current) {
                return current.getPercentage();
            });
            return allPercentages;
        },
        getBudget: function() {
            return {
                budget: data.budget,
                totalIncome: data.totalItems.inc,
                totalExpenses: data.totalItems.exp,
                percentage: data.percentage,
            }
        },
    };
})();



// UI CONTROLLER
var UIController = (function() {

    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn',

        items: '.item',
        itemContainer: '.container',
        itemValue: '.item__value',
        itemDescription: '.item__description',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',

        budgetTitleDate: '.budget__title--date',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        expensesPercentageLabel: '.budget__expenses--percentage',

        itemDeleteButton: '.item__delete--btn',
        expenseItemPercentage: '.item__percentage',
    };

    var formatNumber = function(number, type) {
        var numberSplit, sign;

        // + or - before number with exactly 2 decimal places
        // 1 comma for thousands / 2 for millions etc.
        number = Math.abs(number);
        number = number.toFixed(2);

        numberSplit = number.split('.');

        integer = numberSplit[0];
        if (integer.length > 3 && integer.length <= 6) {
            integer = integer.substr(0, integer.length - 3) + ',' + integer.substr(integer.length - 3, 3);
        }
        else if (integer.length > 6 && integer.length <= 9) {
            integer = integer.substr(0, integer.length - 6) + ',' + integer.substr(integer.length - 6, 3) + ',' + integer.substr(integer.length - 3, 3);
        }
        else if (integer.length > 9 && integer.length <= 12) {
            integer = integer.substr(0, integer.length - 9) + ',' + integer.substr(integer.length - 9, 3) + ',' + integer.substr(integer.length - 6, 3) + ',' + integer.substr(integer.length - 3, 3);
        }
        else if (integer.length > 12 && integer.length <= 15) {
            integer = integer.substr(0, integer.length - 12) + ',' + integer.substr(integer.length - 12, 3) + ',' + integer.substr(integer.length - 9, 3) + ',' + integer.substr(integer.length - 6, 3) + ',' + integer.substr(integer.length - 3, 3);
        }
        else if (integer.length > 15) {
            integer = integer.substr(0, integer.length - 15) + ',' + integer.substr(integer.length - 15, 3) + ',' + integer.substr(integer.length - 12, 3) + ',' + integer.substr(integer.length - 9, 3) + ',' + integer.substr(integer.length - 6, 3) + ',' + integer.substr(integer.length - 3, 3);
        }
        
        decimal = numberSplit[1];

        if (type === 'inc') {
            sign = '+';
        }
        else if (type === 'exp') {
            sign = '-'
        }
        else {
            sign = '';
        }
        
        return `${sign} ${integer}.${decimal}`;
    };

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMStrings.inputType).value,
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMStrings.inputValue).value),
            }
        },
        addListItem: function(obj, type) {
            var html, element;

            if (type === 'inc') {
                // select income list
                element = DOMStrings.incomeContainer;

                html =  `<div class="item clearfix" id="inc-${obj.id}">
                            <div class="item__description">${obj.description}</div>
                            <div class="clearfix">
                                <div class="item__value">${formatNumber(obj.value, type)}</div>
                                <div class="item__editsave">
                                    <button class="item__editsave--btn hide"><i class="ion-ios-folder"></i></button>
                                </div>
                                <div class="item__edit">
                                    <button class="item__edit--btn show"><i class="ion-ios-color-wand"></i></button>
                                </div>
                                <div class="item__delete">
                                    <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                                </div>
                            </div>
                        </div>`;
            }
            else if (type === 'exp') {
                // select expenses list
                element = DOMStrings.expensesContainer;

                html =  `<div class="item clearfix" id="exp-${obj.id}">
                            <div class="item__description">${obj.description}</div>
                            <div class="clearfix">
                                <div class="item__value">${formatNumber(obj.value, type)}</div>
                                <div class="item__percentage">--</div>
                                <div class="item__editsave">
                                    <button class="item__editsave--btn hide"><i class="ion-ios-folder"></i></button>
                                </div>
                                <div class="item__edit">
                                    <button class="item__edit--btn show"><i class="ion-ios-color-wand"></i></button>
                                </div>
                                <div class="item__delete">
                                    <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                                </div>
                            </div>
                        </div>`;
            }

            document.querySelector(element).insertAdjacentHTML('beforeend', html);
        },
        deleteListItem: function(selectorID) {
            var el;

            el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);
        },
        editListItem: function(ID, value) {
            var el, descriptionInput, valueInput;

            el = document.getElementById(ID);

            descriptionInput = document.createElement('input');
            descriptionInput.classList.add('item__description');
            descriptionInput.classList.add('input-desc');
            descriptionInput.type = 'text';
            descriptionInput.value = el.childNodes[1].innerHTML;
            
            el.childNodes[1].replaceWith(descriptionInput);

            valueInput = document.createElement('input');
            valueInput.classList.add('item__value');
            valueInput.classList.add('input-val');
            valueInput.type = 'number';
            valueInput.value = value;

            el.childNodes[3].childNodes[1].replaceWith(valueInput);
        },
        inputTransform: function(ID) {
            var el, value;

            el = document.getElementById(ID);

            value = el.childNodes[3].childNodes[1].innerHTML;
            
            value =  Math.abs(value.replace(/,/, '').replace(/\+/, '').replace(/ /, '').replace(/-/, ''));

            value = value.toFixed(2);

            return value;
        },
        getItemData: function(ID) {
            var el, description, value, count;

            el = document.getElementById(ID);

            description = el.childNodes[1].value;
            value = el.childNodes[3].childNodes[1].value;

            value = parseFloat(value);

            return {
                description: description,
                value: value,
                id: ID,
            };
        },
        displayEdit: function(item, type) {
            
            var el, descriptionInput, valueInput;

            el = document.getElementById(item.id);

            descriptionInput = document.createElement('div');
            descriptionInput.classList.add('item__description');
            descriptionInput.textContent = item.description;
            
            el.childNodes[1].replaceWith(descriptionInput);

            valueInput = document.createElement('div');
            valueInput.classList.add('item__value');
            valueInput.textContent = formatNumber(item.value, type);

            el.childNodes[3].childNodes[1].replaceWith(valueInput);
        },
        clearFields: function() {
            var fields;

            fields = document.querySelectorAll(`${DOMStrings.inputDescription}, ${DOMStrings.inputValue}`);

            fields.forEach(function(current, index, array){
                current.value = '';
            });

            fields[0].focus();
        },
        displayBudget: function(obj) {

            // update total buget
            document.querySelector(DOMStrings.budgetLabel).textContent = `${formatNumber(obj.budget, obj.budget >= 0 ? 'inc' : 'exp')}`;
            
            // update total income and total expenses
            document.querySelector(DOMStrings.incomeLabel).textContent = `${formatNumber(obj.totalIncome, 'inc')}`;
            
            document.querySelector(DOMStrings.expensesLabel).textContent = `${formatNumber(obj.totalExpenses, 'exp')}`;
            
            // update expenses percentage
            if (obj.percentage > 0) {
                document.querySelector(DOMStrings.expensesPercentageLabel).textContent = `${obj.percentage}%`;
            }
            else {
                document.querySelector(DOMStrings.expensesPercentageLabel).textContent = `--`;
            };
        },
        displayPercentages: function(percentages) {
            var fields;

            fields = document.querySelectorAll(DOMStrings.expenseItemPercentage);

            fields.forEach(function(current, index) {

                if (percentages[index] > 0) {
                    current.textContent = `${percentages[index]}%`;
                }
                else {
                    current.textContent = '--';
                };
            });
        },
        displayDate: function() {
            var now, year, month;

            now = new Date();

            months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
            'August', 'September', 'October', 'November', 'December'];
            month = months[now.getMonth()];

            year = now.getFullYear();
            document.querySelector(DOMStrings.budgetTitleDate).textContent = `${month}, ${year}`;
        },
        changeType: function() {

            var fields = document.querySelectorAll(`${DOMStrings.inputType}, ${DOMStrings.inputDescription}, ${DOMStrings.inputValue}`);

            fields.forEach(function(current) {
                current.classList.toggle('red-focus');
            });

            var button = document.querySelector(DOMStrings.inputButton);

            button.classList.toggle('red');
        },
        toggleButtons: function(ID, kind, type) {
            var el, editSave, edit;

            el = document.getElementById(ID);

            type === 'inc' ? count = [3, 5] : count = [5, 7];

            editSave = el.childNodes[3].childNodes[count[0]].childNodes[1];
            edit = el.childNodes[3].childNodes[count[1]].childNodes[1];
            
            if (kind === 'edit') {
                editSave.classList.remove('hide');
                editSave.classList.add('show');
                edit.classList.remove('show');
                edit.classList.add('hide');
            }
            else if (kind === 'editsave') {
                editSave.classList.remove('show');
                editSave.classList.add('hide');
                edit.classList.remove('hide');
                edit.classList.add('show');
            }; 
        },
        getDOMStrings: function() {
            return DOMStrings;
        },
    };
})();



// APP CONTROLLER
var controller = (function(budgetCTRL, UICTRL) {

    function dbclick (event) {
        if (event.target.classList.contains('item__value') || event.target.classList.contains('item__description')) {
            var item;

            event.target.classList.contains('item__value') ? item = event.target.parentNode.parentNode : item = event.target.parentNode;

            ctrlEdit(item.id);
        }
    }
    
    // EVENT LISTENERS
    var setupEventListeners = function() {
        var DOMStrings = UICTRL.getDOMStrings();

        // Event Listener for the Add Item Button
        document.querySelector(DOMStrings.inputButton).addEventListener('mouseup', function(event) {

            if (event.which === 1) {
                ctrlAdd();
            }
        });
        // Event Listener for any keyboard press
        document.addEventListener('keypress', function(event) {

            // if 'enter' was pressed AND the event target is either the edit description field OR the edit value field
            if (event.which === 13 && event.target.classList.contains('input-desc') || event.target.classList.contains('input-val') && event.which === 13) {
                var item;

                // the edit description field and the edit value field are in different poitions, so dependent of which was the event target they select the item through their corresponding "way"
                event.target.classList.contains('item__value') ? item = event.target.parentNode.parentNode : item = event.target.parentNode;

                // then save the edit
                ctrlEditSave(item.id);
            }
            // if 'enter' was pressed AND the element is inside the add__container element
            else if (event.which === 13 && event.target.parentNode.classList.contains('add__container')) {
                
                // then add the new income ore expense to the income or expenses list
                ctrlAdd();
            };
        });
        // Event Listener for the Delete Item Button
        document.querySelector(DOMStrings.itemContainer).addEventListener('mouseup', function(event) {

            if (event.which === 1) {
                var item, itemID;

                // select the <div class="item"></div> from the perspective of the button
                item = event.target.parentNode.parentNode.parentNode.parentNode;

                itemID = item.id;

                if (event.target.classList.contains('ion-ios-close-outline') && item.classList.contains('item')) {
                    ctrlDelete(itemID);
                }
            }
        });
        // Event Listener for the edit item button
        document.querySelector(DOMStrings.itemContainer).addEventListener('mouseup', function(event) {

            if (event.which === 1) {
                var item;

                // select the <div class="item"></div> from the perspective of the button
                item = event.target.parentNode.parentNode.parentNode.parentNode;

                if (event.target.classList.contains('ion-ios-color-wand') && item.classList.contains('item')) {
                    ctrlEdit(item.id);
                }
            }
        });
        // Event Listener for doubleclick on an item description or an item value
        document.addEventListener('dblclick', dbclick)
        // Event Listener for the editsave item button
        document.querySelector(DOMStrings.itemContainer).addEventListener('mouseup', function(event) {

            if (event.which === 1) {
                var item;

                // select the <div class="item"></div> from the perspective of the button
                item = event.target.parentNode.parentNode.parentNode.parentNode;

                if (event.target.classList.contains('ion-ios-folder') && item.classList.contains('item')) {
                    ctrlEditSave(item.id);
                }
            }
        });
        // Event Listener for the input type dropdown
        document.querySelector(DOMStrings.inputType).addEventListener('change', UICTRL.changeType);
    };

    // MAIN FUNCTIONS
    var updatePercentages = function() {
        var percentages;

        // 1. calculate percentages
        budgetCTRL.calculatePercentages();

        // 2. get the percentages data
        percentages = budgetCTRL.getPercentages();

        // 3. update UI
        UICTRL.displayPercentages(percentages);        

    };

    var updateBudget = function() {
        var budget;

        // 1. calculate budget in the budget controller
        budgetCTRL.calculateBudget();

        // 2. return budget 
        budget = budgetCTRL.getBudget();

        // 3. display budget in UI
        UICTRL.displayBudget(budget);
    };

    var ctrlAdd = function() {
        var input, newItem;

        // 1. get input data
        input = UICTRL.getInput();

        // 1a. check input data
        if (isNaN(input.value) || input.value < 0.01) {
            return;
        }

        // 2. add input data to budget controller
        newItem = budgetCTRL.addItem(input);

        // 3. add input data to UI controller
        UICTRL.addListItem(newItem, input.type);

        // 4. clear fields
        UICTRL.clearFields();

        // 5. update budget
        updateBudget();

        // 6. calculate and update percentages
        updatePercentages();
    };

    var ctrlDelete = function(itemID) {
        var splitID, type, ID;

        splitID = itemID.split('-');
        type = splitID[0];
        ID = parseInt(splitID[1]);
        
        // 1.delete item from data structure
        budgetCTRL.deleteItem(type, ID);
        
        // 2.delete item from UI
        UICTRL.deleteListItem(itemID);

        // 3.update budget
        updateBudget();

        // 4. calculate and update percentages
        updatePercentages();
    };

    var ctrlEdit = function(itemID) {
        var splitID, type, value;

        splitID = itemID.split('-');
        type = splitID[0];
        
        // 1. hide edit button and show edit save button
        UICTRL.toggleButtons(itemID, 'edit', type);

        // 2. transform input
        value = UICTRL.inputTransform(itemID);

        // 3. make data editable
        UICTRL.editListItem(itemID, value);

        // 4. remove event listener for doubleclick
        document.removeEventListener('dblclick', dbclick);
    };

    var ctrlEditSave = function(itemID) {
        var splitID, type, newItem, ID;

        splitID = itemID.split('-');
        type = splitID[0];
        ID = parseInt(splitID[1]);

        // 1. get data
        newItem = UICTRL.getItemData(itemID);

        // 2. check input data
        if (isNaN(newItem.value)) {
            return;
        };

        // 3. hide edit save button and show edit button
        UICTRL.toggleButtons(itemID, 'editsave', type)

        // 4. display data
        UICTRL.displayEdit(newItem, type);
        
        // 5. overwrite data from budget controller with input data
        budgetCTRL.replaceEdit(newItem, type, ID);

        // 6. update budget
        updateBudget();

        // 7. update percentages
        updatePercentages();

        // 8. add event listener for doubleclick
        document.addEventListener('dblclick', dbclick);
    };

    return {
        init: function() {
            console.log('App is set up!');
            setupEventListeners();
            UICTRL.displayDate();
            UICTRL.displayBudget({
                budget: 0,
                totalIncome: 0,
                totalExpenses: 0,
                percentage: -1,
            });
        }
    };
})(budgetController, UIController);

controller.init();