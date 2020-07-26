var testList = {
  // status: 0 not started, 1 finished, 2 failed, 3 outdated
  0: {
    name: "SFWRENG 3DB3 Midterm",
    testId: "t0",
    status: 0,
    duration: 80,
    testSet: {
      questionNum: 5,
      question: {
        0: {
          title: "Which of the following schedule results in a write-read conflict?",
          type: 0,
          choices: {
            0: "T2:R(X)",
            1: "T2:R(Y)",
            2: "T1:R(X)",
            3: "T2:W(X)",
          },
          ans: null,
        },
        1: {
          title: "What is lock thrashing and when does it occur?",
          type: 1,
          ans: null,
        },
        2: {
          title: "What is an index on a le of records?",
          type: 0,
          choices: {
            0: "Data structure",
            1: "Filr structure",
            2: "Network structure",
          },
          ans: null,
        },
        3: {
          title: "State the two properties of data independence provided in a DBMS. Why are they important ? ",
          type: 1,
          ans: null,
        },
        4: {
          title: "Identify a primary key for each relation. For each key, briefly state the assumptions or conditions under which each key would be valid.",
          type: 0,
          choices: {
            0: "BRANCH",
            1: "CUSTOMER",
            2: "LOAN",
            3: "BORROWER",
          },
          ans: null,
        },
      },
    },
  },
  1: {
    name: "SFWRENG 3DX4 Midterm",
    testId: "t1",
    status: 0,
    duration: 70,
    testSet: {
      questionNum: 5,
      question: {
        0: {
          title: "Assuming zero initial conditions, what is the Laplace transform of the function",
          type: 0,
          choices: {
            0: "(7 cos (2 t)",
            1: "(7 cos (3 t)",
            2: "(8 cos (2 t)",
            3: "(8 cos (3 t)",
          },
          ans: null,
        },
        1: {
          title: "Write down the loop equation(s) that you would solve for the circuit including the equation for Vo.",
          type: 1,
          ans: null,
        },
        2: {
          title: "What is the control canonical form state-space representation of G1(s)?",
          type: 1,
          ans: null,
        },
        3: {
          title: "How many degrees of freedom does the system have? What are the equations of motion for the system ? ",
          type: 1,
          ans: null,
        },
        4: {
          title: "Find the transfer function G(s).",
          type: 1,
          ans: null,
        },
      },
    },
  },
  2: {
    name: "SFWRENG 2S03 Midterm",
    testId: "t2",
    status: 2,
    duration: 60,
  },
  3: {
    name: "MELD 1A03",
    testId: "t3",
    status: 3,
    duration: 50,
  },
};

export function getTestSet(test) {
  testList = test;
}

export default testList;