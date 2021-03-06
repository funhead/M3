import React from 'react'
import PropTypes from 'prop-types'
import BasePage from './BasePage'
import QuestionResponder from "../../containers/QuestionResponder";
import {splitParagraphs} from "../../services/util";

export const PageOne = ({pageContent, pagination}) => {

    const nextEnabled = pageContent.answers.some(a => a.checked) && pagination.currentPage < pagination.pageCount;

    return (
        <BasePage nextEnabled={nextEnabled} prevEnabled={false} currentPage={pagination.currentPage} sectionHeader={pageContent.sectionHeader}>

            <div>
                {
                    splitParagraphs(pageContent.sectionText).map((pText, i) => {
                        return (
                            <p key={i} className="section-text intro">
                                {pText}
                            </p>)
                    })
                }
            </div>
            <QuestionResponder answers={pageContent.answers} question={pageContent.questions[0]} classNames={"first"}/>
        </BasePage>
    );
};


PageOne.propTypes = {
    pageContent: PropTypes.shape({
        sectionHeader: PropTypes.string.isRequired,
        sectionText: PropTypes.string.isRequired,
        questions: PropTypes.arrayOf(PropTypes.shape({
            questionId: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            questionTypeId: PropTypes.number.isRequired,
        })),
        answers: PropTypes.arrayOf(PropTypes.shape({
            answerId: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
        })).isRequired,
        pageText: PropTypes.string.isRequired,
    }).isRequired,
    pagination: PropTypes.shape({
        currentPage: PropTypes.number.isRequired,
        pageCount: PropTypes.number.isRequired
    })
};

