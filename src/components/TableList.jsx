export default function TableList() {
    
    const clients = [
        { id: 1, name: "Cy Ganderton", email: "Cy.Ganderton@example.com", job: "Quality Control Specialist", rate: 4.5, isactive: true},
        { id: 2, name: "Kendall Kelley", email: "Kendall.Kelley@example.com", job: "Sales Associate", rate: 4.0, isactive: false},
        { id: 3, name: "Avery Rowe", email: "Avery.Rowe@example.com", job: "Marketing Coordinator", rate: 4.8, isactive: true},
        { id: 4, name: "Kerry Burks", email: "Kerry.Burks@example.com", job: "Human Resources Manager", rate: 4.2, isactive: false},
    ];

    return (
    <>
      <div className="overflow-x-auto mt-10">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Job</th>
                        <th>Rate</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody >
                    {/* row 1 */}
                    {clients.map((client) => (
                        <tr key={client.id} className="hover:bg-base-300">
                            <th>{client.id}</th>
                            <td>{client.name}</td>
                            <td>{client.email}</td>
                            <td>{client.job}</td>
                            <td>{client.rate}</td>
                            <td>
                                <button className={`btn rounded-full btn-sm  w-20 ${client.isactive ? 'btn-success' : 'btn-outline btn-success'}`}>
                                    {client.isactive ? 'Active' : 'Inactive'}
                                </button>
                            </td>
                            <td>
                                <button className="btn btn-soft">Update</button>
                            </td>
                            <td>
                                <button className="btn btn-accent">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
  )
}
