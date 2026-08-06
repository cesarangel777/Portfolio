print("Willkommen beim CIS Ticket-System")

ticketnummer = 1001
zustaendig = "Cesar"
weiter = "ja"

while weiter == "ja":
    name = input("Wie heisst du? ")
    alter = int(input("Wie alt bist du?"))
    kategorie = input("Hardware oder Software: ")
    problem = input("Beschreibe dein IT-Problem: ")
    prioritaet = input("Priorität auswählen: ").lower()

    print()
    print("Ticket wurde erstellt")
    print(f"Ticketnummer: {ticketnummer}")
    print(f"Kunde: {name}")
    print(f"Kategorie: {kategorie}")
    print(f"Problem: {problem}")
    print(f"Priorität: {prioritaet}")
    print(f"Zuständig: {zustaendig}")

    if alter >= 18:
        print("Du bist volljährig.")

    elif alter <=18:
        print("Du bist minderjährig.")

    if prioritaet == "hoch":
        print("Sofortige Bearbeitung erforderlich.")

    elif prioritaet == "mittel":
        print("Bearbeitung innerhalb von 24 Stunden.")

    elif prioritaet == "tief":
        print("Bearbeitung innerhalb von drei Arbeitstagen.")

    else:print("Priorität konnte nicht erkannt werden.")

    ist_dringend = prioritaet == "hoch"

    ticketnummer += 1
    weiter = input("Noch ein Ticket erstellen? Ja/Nein: ").lower()
    print()

print("CIS Ticket-System wurde beendet.")