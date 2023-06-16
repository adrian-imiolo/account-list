import PropTypes from "prop-types";

const AccountList = ({ accounts }) => {
  return (
    <div className="mt-4 flex justify-center">
      <div className="max-w-screen-xl w-full">
        <div className="p-4 border-b border-gray-800 flex justify-between">
          <h3 className="font-semibold w-1/3">Name</h3>
          <h3 className="font-semibold w-1/3">Profit &amp; Loss</h3>
          <h3 className="font-semibold w-1/3">Account Type</h3>
        </div>
        {accounts.map((account) => (
          <div key={account.id} className="p-4 border-b flex justify-between">
            <p className="w-1/3">{account.name}</p>
            <p className="w-1/3">
              {account.currency} {account.profitLoss}
            </p>
            <p className="w-1/3">{account.accountType}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

AccountList.propTypes = {
  accounts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AccountList;
