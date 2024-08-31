package com.example.customer.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "Kunde")
public class Customer {

    @Id
    @Column(name = "email")
    private String email;
    @Column(name = "Passwort")
    private String password;
    @Column(name = "Geschlecht")
    private String gender;
    @Column(name = "Vorname")
    private String firstName;
    @Column(name = "Name")
    private String lastName;
    @Column(name = "Geburtsdatum")
    private LocalDate birthDate;
    @Column(name = "Geburtsort")
    private String birthPlace;
    @Column(name = "telefon")
    private String phoneNumber;
    @Column(name = "Nationalität")
    private String nationality;
    @Column(name = "IBAN")
    private String iban;
    @Column(name = "Straße")
    private String street;
    @Column(name = "PLZ")
    private int zip;
    @Column(name = "Ort")
    private String city;

    public Customer() {
    }

    public Customer(String email, String password, String gender, String firstName, String lastName, LocalDate birthDate, String birthPlace, String phoneNumber, String nationality, String iban, String street, int zip, String city) {
        this.email = email;
        this.password = password;
        this.gender = gender;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.birthPlace = birthPlace;
        this.phoneNumber = phoneNumber;
        this.nationality = nationality;
        this.iban = iban;
        this.street = street;
        this.zip = zip;
        this.city = city;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public LocalDate getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
    }

    public String getBirthPlace() {
        return birthPlace;
    }

    public void setBirthPlace(String birthPlace) {
        this.birthPlace = birthPlace;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public String getIban() {
        return iban;
    }

    public void setIban(String iban) {
        this.iban = iban;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public int getZip() {
        return zip;
    }

    public void setZip(int zip) {
        this.zip = zip;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    @Override
    public String toString() {
        return "Customer{" +
                "email='" + email + '\'' +
                ", gender=" + gender +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", birthDate=" + birthDate +
                ", birthPlace='" + birthPlace + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", nationality='" + nationality + '\'' +
                ", iban='" + iban + '\'' +
                ", street='" + street + '\'' +
                ", zip=" + zip +
                ", city='" + city + '\'' +
                '}';
    }
}
