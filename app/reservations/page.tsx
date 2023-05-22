import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import ReservationsClient from "./ReservationsClient";

import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";

const ReservationsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState
          title="You must be logged in to view this ReservationsPage"
          subtitle="Please log in and try again."
        />
      </ClientOnly>
    );
  }

  const reservations = await getReservations({
    authorId: currentUser.id,
  });

  if (reservations.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="You have no reservations"
          subtitle="Please create one and try again."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ReservationsClient
        reservations={reservations}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
};

export default ReservationsPage;
