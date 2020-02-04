import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

/**
 * Indication when the form has been successfully submitted
 */

library.add(faCheck);
library.add(faTimes);

const UserTable = ({ users, showUserResponses }) => {
  let userRows = users.map(u => {
    let responseIcon = u.responded ? "check" : "times";
    let onClick = showUserResponses.bind(this, u);

    return (
      <tr key={u.user_id} onClick={onClick}>
        <td className="text-center">
          <FontAwesomeIcon icon={responseIcon} className={responseIcon} />
        </td>

        <td className="text-left">
          {u.firstname} {u.lastname}
        </td>
        <td width="140">{u.user_id}</td>
      </tr>
    );
  });

  return (
    <div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th className="text-center" width="160">
              Responded
            </th>
            <th className="text-left">User</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>{userRows}</tbody>
      </table>
    </div>
  );
};

export default UserTable;
