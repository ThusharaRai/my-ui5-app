// module.exports = (srv) => {
//     srv.on('findGreater', async (req) => {
//         console.log("Success");
        
//         // Log the input values
//         const { input1, input2 } = req.data;
//         console.log("Input 1:", input1);
//         console.log("Input 2:", input2);
        
//         // Perform the calculation
//         const result = Math.max(input1, input2);
//        // const result = input1 * input2 ;
        
//         // Log the result
//         console.log("Result:", result);
        
//         return result;
//     });
// };

module.exports = (srv) => {
    srv.on('findGreater', async (req) => {
        const { input1, input2 } = req.data;
        const result = Math.max(input1, input2);
        console.log("Result:", result);
        return result;
    });

    srv.on('sum', async (req) => {
        const { input1, input2 } = req.data;
        const result = input1 + input2;
        console.log("Result:", result);
        return result;
    });

    srv.on('subtract', async (req) => {
        const { input1, input2 } = req.data;
        const result = input1 - input2;
        console.log("Result:", result);
        return result;
    });

    srv.on('multiply', async (req) => {
        const { input1, input2 } = req.data;
        const result = input1 * input2;
        console.log("Result:", result);
        return result;
    });

    srv.on('divide', async (req) => {
        const { input1, input2 } = req.data;
        if (input2 === 0) {
            return "Error: Division by zero";
        }
        const result = input1 / input2;
        console.log("Result:", result);
        return result;
    });
};



  