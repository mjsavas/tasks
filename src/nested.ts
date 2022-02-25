import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const pubq = questions.filter((q: Question): boolean => q.published);
    return pubq;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const pubq = questions.filter(
        (q: Question): boolean =>
            q.body !== "" || q.expected !== "" || q.options.length !== 0
    );
    return pubq;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const ret = questions.filter((q: Question): boolean => q.id === id);
    return ret[0] === undefined ? null : ret[0];
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const rq = questions.filter((q: Question): boolean => q.id !== id);
    return rq;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const qnames = questions.map((q: Question): string => q.name);
    return qnames;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const sum = questions.reduce((n: number, q: Question) => n + q.points, 0);
    return sum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const filter = questions.filter((q: Question): boolean => q.published);
    const sumpub = filter.reduce((n: number, q: Question) => n + q.points, 0);
    return sumpub;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const f1 = "id,name,options,points,published";
    const rest = questions.map(
        (q: Question): string =>
            "\n" +
            q.id +
            "," +
            q.name +
            "," +
            q.options.length +
            "," +
            q.points +
            "," +
            q.published
    );
    const res = rest.join("");
    return f1 + res;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const answers = questions.map(
        (q: Question): Answer => ({
            questionId: q.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return answers;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const nqs = questions.map(
        (q: Question): Question => ({
            id: q.id,
            name: q.name,
            body: q.body,
            type: q.type,
            options: q.options,
            expected: q.expected,
            points: q.points,
            published: true
        })
    );
    return nqs;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    if (questions.length !== 0) {
        const copyq = [...questions];
        const qs = copyq[0].type;
        const compareq = questions.filter(
            (q: Question): boolean => q.type.toString() === qs
        );
        return compareq.length === questions.length ? true : false;
    }
    return true;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const newq = makeBlankQuestion(id, name, type);
    const newlist = [...questions, newq];
    return newlist;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const nq: Question[] = questions.map((q: Question) =>
        q.id === targetId ? { ...q, name: newName } : q
    );
    return nq;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const ques = findQuestion(questions, targetId);
    if (ques !== null) {
        const op =
            newQuestionType !== "multiple_choice_question" ? [] : ques.options;
        const nq = questions.map((q: Question) =>
            q.id === targetId ? { ...q, type: newQuestionType, options: op } : q
        );
        return nq;
    }
    return questions;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const qcopy = [...questions];
    const ques = findQuestion(questions, targetId);
    if (ques !== null) {
        if (targetOptionIndex === -1) {
            const op = [...ques.options, newOption];
            const nq = qcopy.map((q: Question) =>
                q.id === targetId ? { ...q, options: op } : q
            );
            return nq;
        } else {
            const op = [...ques.options];
            op.splice(targetOptionIndex, 1, newOption);
            const nq2 = qcopy.map((q: Question) =>
                q.id === targetId ? { ...q, options: op } : q
            );
            return nq2;
        }
    }
    return questions;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const qcopy = [...questions];
    const ques = findQuestion(questions, targetId);
    const index = questions.findIndex(
        (q: Question): boolean => q.id === targetId
    );
    if (ques !== null) {
        const nq = duplicateQuestion(newId, ques);
        qcopy.splice(index + 1, 0, nq);
        return qcopy;
    }
    return questions;
}
