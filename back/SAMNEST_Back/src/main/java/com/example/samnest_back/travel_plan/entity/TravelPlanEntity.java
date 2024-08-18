package com.example.samnest_back.travel_plan.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Entity
@Getter
@Setter
public class TravelPlanEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String travel_plan_name;

    @Column(nullable = false)
    private String destination;

    @Column
    private LocalDate startDate;

    @Column
    private LocalDate endDate;

    @Column
    @OneToMany(mappedBy = "travelPlan", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<DailyScheduleEntity> dailySchedulesEntity;

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }
    public void setDailySchedulesEntity(List<DailyScheduleEntity> dailySchedulesEntity) {
        this.dailySchedulesEntity = dailySchedulesEntity;
    }
}
