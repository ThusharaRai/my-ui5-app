using my.calculator from '../db/schema';

service CalcService {
    entity Numbers as projection on calculator.Numbers;
    action findGreater(input1: Integer, input2: Integer) returns Integer;
    action sum(input1: Integer, input2: Integer) returns Integer;
    action subtract(input1: Integer, input2: Integer) returns Integer;
    action multiply(input1: Integer, input2: Integer) returns Integer;
    action divide(input1: Integer, input2: Integer) returns Integer;
}

