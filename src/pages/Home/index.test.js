import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    
    // Attendez que les éléments soient présents dans le DOM
    await waitFor(() => {
      expect(screen.getByText("Nom")).toBeInTheDocument();
      expect(screen.getByText("Prénom")).toBeInTheDocument();
      expect(screen.getByText("Personel / Entreprise")).toBeInTheDocument();
      expect(screen.getByText("Email")).toBeInTheDocument();
    });
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(); // Appeler resolve après un délai de 2000 ms
        }, 2000);
      });

      await screen.findByText("Message envoyé !");
    });
  });

});


describe("When a page is created", () => {
  it("a list of events is displayed", () => {
    // to implement
  })
  it("a list a people is displayed", () => {
    // to implement
  })
  it("a footer is displayed", () => {
    // to implement
  })
  it("an event card, with the last event, is displayed", () => {
    // to implement
  })
});
