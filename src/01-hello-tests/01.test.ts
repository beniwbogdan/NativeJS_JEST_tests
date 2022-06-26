import {splitIntoWords, sum} from "./01";

test("sum should be correct", () => {
    //data
    const a = 1;
    const b = 2;
    const c = 3;
    //action
    const result = sum(a, b);
    const result1 = sum(a, c);

    //expected result
    expect(result).toBe(3);
    expect(result1).toBe(4);
})

test("Splittings into words should be correct", () => {
    //data
    const sent1 = "Hello my friend!";
    const sent2 = "JS - the best programming language.";

    //action
    const result_1=splitIntoWords(sent1);
    const result_2=splitIntoWords(sent2);

    //expected result
    expect(result_1.length).toBe(3);
    // expect(result_1[0]).toBe("hello");
    //expect(result_1[1]).toBe("my");
    //expect(result_1[2]).toBe("friend");

     expect(result_2.length).toBe(5);
    // expect(result_2[0]).toBe("js");
    // expect(result_2[1]).toBe("the");
    // expect(result_2[2]).toBe("best");
    // expect(result_2[3]).toBe("programming");
    // expect(result_2[4]).toBe("language");

})