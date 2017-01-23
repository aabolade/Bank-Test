# Bank Test

User Stories
============

```

As a user
So I can store my money in a safe place
I would like to make a deposit into my bank Account

As a User
So I can take out extra money when I need to
I would like to make a withdrawal from my bank Account

As a User
So I can keep track of my bank balance
I would like to see a statement of all my transactions and current balance

```

Specification
=============

* Deposits, withdrawal
* Account statement (date, amount, balance) printing.
* Data can be kept in memory

Example
=======

Given a client makes a deposit of 1000 on 10-01-2012 And a deposit of 2000 on 13-01-2012 And a withdrawal of 500 on 14-01-2012 When she prints her bank statement Then she would see

```

date       || credit || debit   || balance
14/01/2012 ||        || 500.00  || 2500.00
13/01/2012 || 2000.00||         || 3000.00
10/01/2012 || 1000.00||         || 1000.00

```

Technologies used
=================

* Code written in Javascript
* Testing using jasmine


Instructions and Installation
=============================

1. Fork and clone this repo
2. Open SpecRunner.html file into any browser. It should be ./yourPath/SpecRunner.html
3. You will then need to open the developer tools which can be done by pressing ```F12``` or ```cmd+alt+i``` on a Mac.
