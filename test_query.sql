select firstQuery.name, firstQuery.Incomes, secondQuery.Debts, ActiveUsers.Users


from (
	/* Select incomes from payment_invoice_membership */
	SELECT p.name as Name, SUM(pay.amount) AS Incomes FROM memberships as m 
	INNER JOIN plans as p
	ON m.planId = p.id
	INNER JOIN invoice_membership as i
	ON i.membershipId = m.id
	INNER JOIN payment_invoice_membership as pay
	ON pay.invoiceMembershipId = i.id
	WHERE p.name LIKE "%recurrente%"
	GROUP by Name

)
as firstQuery

left join
(
	select  p.name as Name, SUM(pay.total) as Debts FROM memberships as m
	INNER JOIN plans AS p
	ON p.id = m.planId
	INNER JOIN invoice_membership as im
	ON im.membershipId = m.id
	INNER JOIN invoice as i
	ON i.id = im.invoiceId
	INNER JOIN payment as pay
	ON pay.invoiceId = i.id
	WHERE pay.date > m.endDate && pay.total > 0 
	&& p.name LIKE "%recurrente%" 
	GROUP by Name
)
as secondQuery

ON firstQuery.Name = secondQuery.Name

left JOIN 
(
	
    SELECT p.name as Name, count(p.name) as Users FROM 
    (
		SELECT * 
		FROM memberships
		group by userEstablishmentId
    )as m
    INNER JOIN plans as p 
	ON p.id = m.planId
	WHERE p.name LIKE '%recurrente%' && m.endDate > curdate() 
	GROUP BY p.name
)
as ActiveUsers

ON firstQuery.Name = ActiveUsers.Name


