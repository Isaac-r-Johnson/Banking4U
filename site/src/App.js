/* eslint-disable no-unused-vars */
import React from "react";
import {useState, useEffect,} from 'react';
import bellIcon from './images/bell-icon.png';
import gearIcon from './images/gear-icon.png';
import tempProfile from './images/profile.jpg';
import Graph from "./components/Graph";
import BarGraph from './components/BarGraph';

const App = (props) => {
    const incomePoints = [0, 2460, 10000, 12000, 15000, 14234, 15300, 16000, 18000, 15342, 20000, 25800];
    const expensePoints = [0, 1450, 2335, 1540, 1204, 1000, 2000, 3000, 4234, 4000, 3900, 3366];
    const years = ['2013', '2014','2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'];
    

    return (
        <div>

            <div className="header">
                <div className="notification">
                    <img src={bellIcon} alt="Bell"/>
                </div>
                <div className="settings">
                    <img src={gearIcon} alt="Gear"/>
                </div>
                <div className="profile">
                    <img src={tempProfile} alt="Profile"/>
                </div>
            </div>

            <div className="card-data">

                <div className="income">
                    <div className="income-toper">
                        <h6>Income</h6>
                        <div>
                            <div className="income-arrow-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#D2F2E5" class="bi bi-arrow-down-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" stroke="#D2F2E5" stroke-width="1.2" d="M2 13.5a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1H3.707L13.854 2.854a.5.5 0 0 0-.708-.708L3 12.293V7.5a.5.5 0 0 0-1 0z"/>
                                </svg>
                            </div>
                        </div>
                        <h2>$25,000</h2>
                        <div className="income-data">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="#004B50" class="bi bi-graph-up-arrow" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"/>
                            </svg>
                            <h6 className="income-percent">+29%</h6>
                            <h6 className="follow-income-percent">than last month</h6>
                        </div>
                    </div>
                    <Graph color='#004B50' values={incomePoints} class="income-graph-container"/>
                </div>

                <div className="expense">
                    <div className="expense-toper">
                        <h6>Expenses</h6>
                        <div>
                            <div className="expense-arrow-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FFF2D3" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" stroke="#FFF2D3" stroke-width="1.2" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                                </svg>
                            </div>
                        </div>
                        <h2>$3,365</h2>
                        <div className="expense-data">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="#7A4100" class="bi bi-graph-down-arrow" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm10 11.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v2.6l-3.613-4.417a.5.5 0 0 0-.74-.037L7.06 8.233 3.404 3.206a.5.5 0 0 0-.808.588l4 5.5a.5.5 0 0 0 .758.06l2.609-2.61L13.445 11H10.5a.5.5 0 0 0-.5.5"/>
                            </svg>
                            <h6 className="expense-percent">-13.7%</h6>
                            <h6 className="follow-expense-percent">than last month</h6>
                        </div>
                    </div>
                    <Graph color='#7A4100' values={expensePoints} class="income-graph-container"/>
                </div>

                <div className="card-float">
                    <div className="card-info">
                        <div className="info">
                            <h6>Current Balance</h6>
                            <h2>$50,432.49</h2>
                            <h5 className="card-number">**** **** **** 1021</h5>
                            <div className="card-bottom">
                                <div>
                                    <h6>Card Holder</h6>
                                    <h5>Isaac Johnson</h5>
                                </div>
                                <div>
                                    <h6>Valid Until</h6>
                                    <h5>10/21</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="stats-Qtrans">
                <div className="stats">
                    <div className="stats-title">
                        <div>
                            <h4>Balance Statistics</h4>
                            <h6>(+100% Income | +100% Expense) than last year</h6>
                        </div>
                        <div className="stats-key">
                            <h6>Year</h6>
                        </div>
                    </div>
                    <div className="stats-graph">

                        <BarGraph income={incomePoints} expense={expensePoints} years={years}/>

                    </div>
                </div>
                <div className="quick-trans">
                    
                </div>
            </div>

            <div className="Rtrans"></div>

        </div>
    );
}

export default App;